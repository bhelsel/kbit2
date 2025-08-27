import { useEffect, useState } from "react";
import classes from "./InputForm.module.css";

function InputForm({
  age,
  setAge,
  verbalTotal,
  setVerbalTotal,
  nonverbalRaw,
  setNonverbalRaw,
}) {
  const [verbalRaw, setVerbalRaw] = useState("");
  const [verbalRiddles, setVerbalRiddles] = useState("");

  useEffect(() => {
    if ((verbalRaw > 0) & (verbalRiddles > 0)) {
      setVerbalTotal(Number(verbalRaw) + Number(verbalRiddles));
    } else {
      setVerbalTotal(0);
    }
  }, [verbalRaw, verbalRiddles, setVerbalTotal]);

  const createRangeValidator = (setter, min, max, defaultValue = 0) => {
    return (e) => {
      const value = Number(e.target.value);
      const currentMax = typeof max === "function" ? max() : max; // Calculate max at runtime
      if (value >= min && value <= currentMax) {
        setter(e.target.value);
      } else {
        setter(defaultValue);
      }
    };
  };

  return (
    <div className={classes.content}>
      <h3 className={classes.sidePanelTitle}>
        Kaufman Brief Intelligence Test
      </h3>
      <div className={classes.construct}>
        <label className={classes.label}>Age of the Participant</label>
        <input
          type="number"
          min={18}
          max={66}
          required
          onChange={createRangeValidator(setAge, 18, 66, 0)}
          className={classes.input}
        />
      </div>
      <div className={classes.construct}>
        <label className={classes.label}>Verbal Knowledge Raw Score</label>
        <input
          type="number"
          required
          min={0}
          max={108 - Number(verbalRiddles)}
          onChange={createRangeValidator(
            setVerbalRaw,
            0,
            () => 108 - Number(verbalRiddles),
            0
          )}
          className={classes.input}
        />
      </div>
      <div className={classes.construct}>
        <label className={classes.label}>Riddles Raw Score</label>
        <input
          type="number"
          required
          min={0}
          max={108 - Number(verbalRaw)}
          onChange={createRangeValidator(
            setVerbalRiddles,
            0,
            () => 108 - Number(verbalRaw),
            0
          )}
          className={classes.input}
        />
      </div>
      <div className={classes.construct}>
        <label className={classes.label}>Nonverbal Raw Score</label>
        <input
          type="number"
          required
          min={0}
          max={46}
          onChange={(e) => setNonverbalRaw(e.target.value)}
          className={classes.input}
        />
      </div>
    </div>
  );
}

export default InputForm;
