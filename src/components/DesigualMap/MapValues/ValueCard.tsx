"use client"

import { useState } from "react";
import { Styles } from "./mapValues.style";

type Props = {
    value: string;
    description: string;
}

export default function ValueCard({value, description}: Props) {
    const [toggleInfo, setToggleInfo] = useState(false);

    return(
        <Styles.ValueCard>
            <div>
                {value}
            </div>
            <Styles.ValueDescription>
                {description}
            </Styles.ValueDescription>  
        </Styles.ValueCard>
    )
}