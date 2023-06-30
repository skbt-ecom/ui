import style from "./MainContainer.module.scss";

interface IContainerProps {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: IContainerProps) => {
  return <div className={style.container}>{children}</div>;
};
