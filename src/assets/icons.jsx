import React from "react";
import SiteLogoImg from "./logo.png"
import HamIconImg from "./hamburger.svg";
import HomeIconImg from "./home.svg";
import TransactIconImg from "./transaction.svg";
import TransferIconImg from "./transfer.svg";
import UserIconImg from "./user.svg";
import LogoutIconImg from "./logout.svg";
import LoginOverlayImg from "./login-overlay.jpg";
import CardChipImg from "./card-chip.svg";

export const SiteLogo = ({ className }) => (
    <img className={className} src={SiteLogoImg} width="50" height="50"/>
);

export const HamIcon = ({ className }) => (
    <img className={className} src={HamIconImg} />
);

export const HomeIcon = ({ className }) => (
    <img className={className} src={HomeIconImg} />
);

export const TransactIcon = ({ className }) => (
    <img className={className} src={TransactIconImg} />
);

export const TransferIcon = ({ className }) => (
    <img className={className} src={TransferIconImg} />
);

export const UserIcon = ({ className }) => (
    <img className={className} src={UserIconImg} />
);

export const LogoutIcon = ({ className }) => (
    <img className={className} src={LogoutIconImg} />
);

export const LoginOverlay = ({ className }) => (
    <img className={className} src={LoginOverlayImg} />
);

export const CardChip = ({ className }) => (
    <img className={className} src={CardChipImg} />
);
