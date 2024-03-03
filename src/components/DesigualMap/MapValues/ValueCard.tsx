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
        <Styles.ValueCard onClick={() => setToggleInfo(!toggleInfo)} toggleInfo={toggleInfo}>
            <div>
                {value}
            </div>
            {toggleInfo && <Styles.ValueDescription toggleInfo={toggleInfo}>
                {description}
            </Styles.ValueDescription>}
        </Styles.ValueCard>
    )
}