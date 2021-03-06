import React from "react";
import {Feather as Icon} from "@expo/vector-icons";
import {Box, Theme, Text} from "./Theme";


interface RoundedIconProps {
    name: string;
    size: number;
    color: keyof Theme['colors'];
    backgroundColor: keyof Theme['colors'];
    iconRatio: number;
}
const RoundedIcon = ({
                         name,
                         size,
                         color,
                         backgroundColor,
                         iconRatio
    }: RoundedIconProps) => {
    const iconSize = size * iconRatio;
    return(
        <Box paddingRight='s'>
            <Box
                height={size}
                width={size}
                borderRadius='xl'
                justifyContent='center'
                alignItems='center'
                {...{ backgroundColor }}
            >
                <Text {...{ width: iconSize, height: iconSize}} {...{color}}>
                    <Icon
                        size={iconSize}
                        {...{ name }}
                    />
                </Text>

            </Box>
        </Box>
    )
};

RoundedIcon.defaultProps = {
    iconRatio: 0.7
};

export default RoundedIcon
