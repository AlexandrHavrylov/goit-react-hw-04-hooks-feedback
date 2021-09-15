import React from "react";
import { PropTypes } from "prop-types";
import { Notifications } from "./styled/Notification.styled";

export const Notification = ({ message }) => {
  return <Notifications>{message}</Notifications>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
