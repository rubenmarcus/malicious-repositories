const Notification = require("../../models/Notification");
const SocketMapping = require("../../models/SocketMapping");
const { dropRight } = require("lodash");
module.exports = async (io, adminId, notificationObj) => {
  //notify to the admin through socket.io
  let notificationObjOfAdmin = await Notification.findOne({ admin: adminId });
  if (!notificationObjOfAdmin) {
    // create new notification
    notificationObjOfAdmin = new Notification({
      admin: adminId,
      notifications: [notificationObj],
      noOfUnseen: 1,
    });
    await notificationObjOfAdmin.save();
  } else {
    let notifications = notificationObjOfAdmin.notifications;
    notifications.unshift(notificationObj);
    notificationObjOfAdmin.noOfUnseen += 1;
    if (notificationObjOfAdmin.noOfUnseen < 20 && notifications.length > 20) {
      notificationObjOfAdmin.notifications = dropRight(
        notifications,
        notifications.length - 20
      );
    }
    await notificationObjOfAdmin.save();
  }
  //now notifying to the admin
  let socketUser = await SocketMapping.find({ user: adminId });
  if (socketUser.length) {
    //for every same login user emit notification
    socketUser.forEach((u) => {
      io.to(u.socketId).emit("notification", {
        noOfUnseen: notificationObjOfAdmin.noOfUnseen,
      });
    });
  }
};
