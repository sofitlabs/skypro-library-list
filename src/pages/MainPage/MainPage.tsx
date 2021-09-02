import { AppLayout } from "../../Layout/Layout";

import { Tabs } from "../../components/Tabs/Tabs";
import { ControlPanel } from "../../components/ControlPanel/ControlPanel";

export const MainPage = () => {
  return (
    <AppLayout>
      <>
        <ControlPanel />
        <Tabs />
      </>
    </AppLayout>
  );
};
