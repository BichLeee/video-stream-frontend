import { Flex } from "antd";
import classNames from "classnames/bind";

import { Avatar, Image } from "@/components/elements";
import { Typography } from "@/components/typography";
import thumbnail from "@/assets/images/defaultVideoThumbnail.avif";
import s from "./videoCard.module.scss";

const cx = classNames.bind(s);

export const VideoCard = () => {
    const time = 3;

    return (
        <div className={cx("container")}>
            <div style={{ position: "relative" }}>
                <Image
                    src={thumbnail.src}
                    alt="thumbnail"
                    width="100%"
                    ratio={180 / 101}
                    style={{ borderRadius: 12 }}
                />
                <div className={cx("time")}>{time}:00</div>
            </div>
            <Flex gap={12} style={{ marginTop: 12 }}>
                <Avatar name="Jennie" />
                <div>
                    <Typography variant="h3">
                        JENNIE, Doechii - ExtraL (Official Video)
                    </Typography>
                    <Typography variant="body2">JENNIE</Typography>
                    <Typography variant="body2">
                        22M views • 9 days ago
                    </Typography>
                </div>
            </Flex>
        </div>
    );
};
