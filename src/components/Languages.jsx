export default function Languages(props) {
  return (
    <>
      {props.languages.map((language) => {
        const styles = {
          backgroundColor: language.backgroundColor,
          color: language.color,
        };

        return (
          <span className="chip" key={language.name} style={styles}>
            {language.name}
          </span>
        );
      })}
    </>
  );
}
