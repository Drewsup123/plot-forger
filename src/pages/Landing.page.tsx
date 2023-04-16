import React from "react";
import styles from "../styles/pages/landingPage.module.sass";
import landingPageRead from "../Assets/images/landingPageRead.jpg";
import landingPageWrite from "../Assets/images/landingPageWrite.jpg";

const LandingPage = () => {
    return(
        <div className={styles.landingPage}>
            <div className={styles.section + " " + styles.leftSection} style={{
                backgroundImage: `url(${landingPageRead})`
            }}>
                <button>I am a Reader</button>
            </div>
            <div className={styles.section + " " + styles.rightSection} style={{
                backgroundImage: `url(${landingPageWrite})`
            }}>
                <button>I am a Creator</button>
            </div>
        </div>
    )
}

export default LandingPage;