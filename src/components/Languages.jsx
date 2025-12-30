import { clsx } from "clsx";

export default function Languages(props) {
  return (
    <>
      {props.languages.map((language, index) => {
        const isLanguageLost = index < props.wrongGuessCount;

        const styles = {
          backgroundColor: language.backgroundColor,
          color: language.color,
        };

        const className = clsx({
          chip: true,
          lost: isLanguageLost,
        });

        return (
          <span className={className} key={language.name} style={styles}>
            {language.name}
          </span>
        );
      })}
    </>
  );
}

// export default function Languages(props) {
//   const times = props.wrongGuessCount;

//   return (
//     <>
//       {props.languages.map((language) => {
//         const styles = {
//           backgroundColor: language.backgroundColor,
//           color: language.color,
//         };

//         return (
//           <span className="chip" key={language.name} style={styles}>
//             {language.name}
//           </span>
//         );
//       })}
//     </>
//   );
// }
