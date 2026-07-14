import { Hamburger } from "./Hamburger";
export const Main = () => {
  const styles = {
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh",
    },
  };

  return (
    <div style={styles.main} className="Main">
      <Hamburger />
    </div>
  );
};
