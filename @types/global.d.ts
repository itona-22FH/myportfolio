type AccountControlBtnProps = {
  text: string;
  colorScheme: string;
  color: string;
  width: string;
  href:string;
};

type ConfirmationBtnProps = {
  text: string;
  colorScheme: string;
  color: string;
  width: string;
  confirmation:string;
}

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

type HeadTitleProps = {
  title: string;
}

type CategorySearchProps = {
  category: string;
}