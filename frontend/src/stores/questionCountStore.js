import React, { useState, createContext, useContext } from "react";

export const QuestionCountContext = createContext();

export const useQuestionCountContext = () => useContext(QuestionCountContext);

export const QuestionCountProvider = ({ children }) => {
  const [questionCount, setQuestionCount] = useState(0);

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
