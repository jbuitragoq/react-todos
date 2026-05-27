import type { IconEnum } from "../enums/icon.enum";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    type: typeof IconEnum[keyof typeof IconEnum];
    onClick?: () => void;
}
