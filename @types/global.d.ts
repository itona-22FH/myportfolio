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
  handleConfirmation: () => void;
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
  onChangeHandle: (e: {
    target: { name: string; value: string | number };
  }) => void;
  formValue: string;
};

type NewRegisterTextBox = {
  htmlFor: string;
  placeholder: string;
  textBoxName: string;
  onChangeHandle: (e: {
    target: { name: string; value: string | number };
  }) => void;
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
  onClickHandle: MouseEventHandler<T> | undefined;
};

type ShowPlan = {
  planId: Plan["planId"];
  planTitle: Plan["planTitle"];
  planImage: Plan["planImage"];
  userName: User["userName"];
  price: Plan["price"];
  userAvatar: User["userAvatar"];
  review: User["review"];
  genreCategory: Plan["genreCategory"];
  titleCategory: Plan["titleCategory"];
};

type User = {
  userId: string | string[] | undefined;
  userName: string;
  userAvatar: string;
  email: string;
  password: string;
  twitterAccount: string;
  youtubeAccount: string;
  selfIntroduction: string;
  achievement: string;
  review: {};
};

type Plan = {
  planId: string | string[] | undefined;
  userId: string | string[] | undefined;
  planTitle: string;
  planImage: string;
  study: string;
  guidance: string;
  titleCategory: string;
  genreCategory: string;
  price: string;
};

type ConfirmationDrawerProps = {
  planData: Plan;
  profileData: User;
};

type ReviewStatusProps = {
  review: User["review"];
};

type UserInformationProps = {
  userId: Plan["userId"] | User["userId"];
  userName: User["userName"];
  userAvatar: User["userAvatar"];
  review: User["review"];
};

type PostReviewModalProps = {
  text: string;
  colorScheme: string;
  color: string;
  width: string;
  userId: Plan["userId"] | User["userId"];
};

type GamePlanProps = {
  showPlan: ShowPlan[];
};

declare module "react-awesome-stars-rating";
