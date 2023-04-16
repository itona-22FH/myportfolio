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
};

type NewRegisterTextBox = {
  htmlFor: string;
  placeholder: string;
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

type User = {
  userID: string;
  userName: string;
  userAvatar: string;
  email: string;
  password: string;
  twitterAccount: string;
  youtubeAccount: string;
  selfIntroduction: string;
  achievement: string;
  reviewCount: number;
  reviewScore: number;
};

type Plan = {
  planID: string;
  userID: string;
  planTitle: string;
  planImage: string;
  study: string;
  guidance: string;
  price: string;
  userAvatar: string;
  userName: string;
  reviewCount: number;
  reviewScore: number;
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
};

type ReviewStatusProps = {
  reviewScore: number;
  reviewCount: number;
};

type UserInformationProps = {
  userID: string;
  testUserId: string;
  userName: string;
  userAvatar: string;
  reviewCount: number;
  reviewScore: number;
};
