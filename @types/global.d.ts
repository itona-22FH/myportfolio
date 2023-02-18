type AccountControlBtnProps = {
  text: string;
  colorScheme: string;
  color: string;
  width: string;
  href:string;
};

type TextBox = {
  title: string;
  text: string
  fontSize: string;
};

type LayoutProps = {
  readonly children: ReactElement;
};

type FormInputProps = {
  type: string
  label: string
  placeholder: string
}

type myPageTextBoxProps = {
  htmlFor: string
  placeholder:string
}
type ContractBtnProps = {
  text: string;
  colorScheme: string;
  color: string;
  width: string;
  onClick: () => void;
}