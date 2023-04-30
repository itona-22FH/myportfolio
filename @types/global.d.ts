type AccountControlBtnProps = {
  text: string;
  colorScheme: string;
  color: string;
  width: string;
  href: string;
};

type ConfirmationBtnProps = {
  text: string;
  colorScheme: string;
  color: string;
  width: string;
  confirmation: string;
  handleConfirmation: any;
  confirmationLink: string;
};

type TextBox = {
  title: string;
  text: string;
  fontSize: string;
};

type LayoutProps = {
  readonly children: ReactElement;
};

type FormInputProps = {
  type: string;
  label: string;
  placeholder: string;
  formName: string;
  onChangeHandle: any;
  formValue: string;
};

type NewRegisterTextBox = {
  htmlFor: string;
  placeholder: string;
  textBoxName: string;
  onChangeHandle: any;
  textBoxValue: string;
};

type ContractBtnProps = {
  text: string;
  colorScheme: string;
  color: string;
  width: string;
  onClick: () => void;
};

type HeadTitleProps = {
  title: string;
};

type CategorySearchProps = {
  category: string;
};

type ShowPlan = {
  planID: string;
  planTitle: string;
  planImage: string;
  userName: string;
  price: string;
  userAvatar: string;
  review: any;
  genreCategory: string;
  titleCategory: string;
};

type User = {
  userID: string | undefined;
  userName: string;
  userAvatar: string;
  email: string;
  password: string;
  twitterAccount: string;
  youtubeAccount: string;
  selfIntroduction: string;
  achievement: string;
  review: any;
};

type Plan = {
  planID: string;
  userID: string | string[] | undefined;
  planTitle: string;
  planImage: string;
  study: string;
  guidance: string;
  titleCategory: string;
  genreCategory: string;
  price: string;
};

type PlanM = {
  userID: string;
  plan1: string;
  plan2: string;
  plan3: string;
  plan4: string;
};

type ConfirmationDrawerProps = {
  planData: Plan;
  profileData: User;
};

type ReviewStatusProps = {
  review: number[];
};

type UserInformationProps = {
  userID: string | string[] | undefined;
  userName: string;
  userAvatar: string;
  review: any;
};

type PostReviewModalProps = {
  text: string;
  colorScheme: string;
  color: string;
  width: string;
  userId: string | string[] | undefined;
};

declare module "react-awesome-stars-rating";
