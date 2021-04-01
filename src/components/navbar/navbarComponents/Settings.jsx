import { SettingsIcon } from "@chakra-ui/icons";
import {  Button } from "@chakra-ui/react";
import React from "react";

function Settings() {
  return (
    <>
      <Button disabled   mx={2} borderRadius="120px" width={2}>
        <SettingsIcon />
      </Button>
    </>
  );
}

export default Settings;
