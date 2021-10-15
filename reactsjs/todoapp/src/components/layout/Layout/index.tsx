import { FC } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";

type Props = {
  hideHeader?: boolean;
  hideFooter?: boolean;
  mainClass?: string;
};

const Layout: FC<Props> = ({ children, hideHeader, hideFooter, mainClass }) => {
  return (
    <>
      {!hideHeader && <Header />}
      <Main className={mainClass}>{children}</Main>
      {!hideFooter && <Footer />}
    </>
  );
};

export { Layout };
