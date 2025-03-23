"use client";

import { Col, Row } from "antd";

import { VideoCard } from "@/components/modules";

export const Introduction = () => {
    return (
        <div style={{ paddingInline: 8 }}>
            <Row gutter={[16, 16]}>
                <Col md={12} lg={8}>
                    <VideoCard />
                </Col>
                <Col md={12} lg={8}>
                    <VideoCard />
                </Col>
                <Col md={12} lg={8}>
                    <VideoCard />
                </Col>
                <Col md={12} lg={8}>
                    <VideoCard />
                </Col>
                <Col md={12} lg={8}>
                    <VideoCard />
                </Col>
            </Row>
        </div>
    );
};
