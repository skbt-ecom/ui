import { styled } from "@mui/material";
import { ThemePalleteHalva } from "@src/core/themes/themeConfig";
import type { FC, HTMLProps } from "react";

type HalvaLogoProps = {
  Img: FC<Partial<HTMLProps<SVGElement>>>;
  variant: "red" | "dark";
};

const HalvaLogo = ({ Img, variant }: HalvaLogoProps) => {
  const { BLACK_PRIMARY, RED_PRIMARY } = ThemePalleteHalva;
  const color = variant === "red" ? RED_PRIMARY : BLACK_PRIMARY;

  const Logo = styled(Img)(({ theme }) => ({
    fill: color,
    width: 72,
    height: 14,

    [theme.breakpoints.up("sm")]: {
      width: 78,
    },

    [theme.breakpoints.up("md")]: {
      width: 108,
      height: 20,
    },
  }));

  return <Logo alt="halva logo" />;
};

export default HalvaLogo;
