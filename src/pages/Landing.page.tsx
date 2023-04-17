import React from "react";
import styles from "../styles/pages/landingPage.module.sass";
import landingPageRead from "../Assets/images/landingPageRead.jpg";
import landingPageWrite from "../Assets/images/landingPageWrite.jpg";

const LandingPage = () => {
    const [selectedType, setSelectedType] = React.useState<
        "reader" | "creator" | null
    >(null);

    const selectType = (
        e: React.MouseEvent<HTMLButtonElement>,
        type: "reader" | "creator"
    ) => {
        e.preventDefault();
        setSelectedType(type);
    };

    return (
        <div className={styles.landingPage}>
            <div
                className={styles.section + " " + styles.leftSection}
                style={{
                    backgroundImage: `url(${landingPageRead})`,
                }}
            >
                <button onClick={(e) => selectType(e, "reader")}>
                    I am a Reader
                </button>
            </div>
            <div
                className={styles.section + " " + styles.rightSection}
                style={{
                    backgroundImage: `url(${landingPageWrite})`,
                }}
            >
                <button onClick={(e) => selectType(e, "creator")}>
                    I am a Creator
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
