import React, { useState, createContext, useContext, useEffect } from "react";

export const QuestionCountContext = createContext();

export const useQuestionCountContext = () => useContext(QuestionCountContext);

export const QuestionCountProvider = ({ children }) => {
  const [questionCount, setQuestionCount] = useState(0);

  useEffect(() => {
    if (questionCount) {
      localStorage.setItem("questionCountStore", JSON.stringify(questionCount));
    }
  }, [questionCount]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("questionCountStore"))) {
      setQuestionCount(JSON.parse(localStorage.getItem("questionCountStore")));
    }
  }, []);

  return (
    <QuestionCountContext.Provider
      value={{
        questionCount,
        setQuestionCount,
      }}
    >
      {children}
    </QuestionCountContext.Provider>
  );
};

export default QuestionCountProvider;
