import React, { useState, useEffect } from "react";
import translate from "../apis/Translate";
import axios from "axios";

const Convert = ({ language, term }) => {
  const [converted, setConverted] = useState("");
  const [debouncedText, setDebouncedText] = useState(term);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(term);
    }, 1000);

    return () => {
      clearTimeout(timeoutId)
    }
  }, [term])

  useEffect(() => {
    const convert = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setConverted(data.data.translations[0].translatedText);
    };
    convert();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{converted}</h1>
    </div>
  );
};

export default Convert;
