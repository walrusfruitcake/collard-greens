import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { TextEditor } from "./TextEditor";

describe('TextEditor', () => {
  describe('when we type words and submit', () => {
    it('displays the words we typed', () => {
      const subject = render(<TextEditor />)
      const textArea = subject.getByLabelText("text-area")
      fireEvent.change(textArea, {target: {value: "some cool words"}})

      const submitButton = subject.getByText('submit yo text')
      fireEvent.click(submitButton)
      expect(subject.getByLabelText("display").textContent).toContain("some cool words");
    })
  });
});
