import { Button } from "@/components/elements";
import { IconMic, IconSearch } from "@/components/SVGs";
import { Typography } from "@/components/typography";
import { Flex, Input, Popover } from "antd";
import { useRef, useState } from "react";
import styled from "styled-components";

const searchItems = [
    {
        text: "Black Pink Black Pink Black Pink Black Pink Black Pink Black Pink Black Pink Black Pink Black Pink Black Pink Black Pink",
    },
    {
        text: "Jennie",
    },
    {
        text: "Lisa",
    },
    {
        text: "Ngoc Bich",
    },
];

export const SearchVideo = () => {
    const inputRef = useRef(null);
    const [focused, setFocused] = useState(false);

    return (
        <Flex gap={16} style={{ marginLeft: 40 }}>
            <Wrapper
                style={{ maxWidth: 600 }}
                onClick={(e) => e.stopPropagation()}
            >
                <Popover
                    open={focused}
                    arrow={false}
                    content={
                        <Content>
                            {searchItems.map((i) => (
                                <SearchItem key={i.text}>
                                    <Flex
                                        align="center"
                                        style={{
                                            flex: 1,
                                            overflow: "hidden",
                                        }}
                                    >
                                        <IconSearch
                                            style={{ marginRight: 10 }}
                                        />
                                        <Typography
                                            truncate
                                            style={{ maxWidth: "90%" }}
                                        >
                                            {i.text}
                                        </Typography>
                                    </Flex>
                                    <Remove>Remove</Remove>
                                </SearchItem>
                            ))}
                        </Content>
                    }
                    getPopupContainer={(trigger) => trigger.parentElement}
                    placement="bottomLeft"
                >
                    <InputWrapper focused={focused}>
                        {focused && <IconSearch style={{ width: 20 }} />}
                        <div style={{ flex: 1 }}>
                            <CustomInput
                                ref={inputRef}
                                placeholder="Search"
                                allowClear
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                            />
                        </div>
                    </InputWrapper>
                </Popover>
                <SearchButton>
                    <IconSearch />
                </SearchButton>
            </Wrapper>
            <Button icon={<IconMic />} shape="circle" />
        </Flex>
    );
};

const Wrapper = styled.div`
    display: flex;
    height: 40px;
    width: fit-content;
    align-items: center;
    border-radius: 40px;
    width: 100%;
    margin-left: 40px;

    & .ant-popover {
        max-width: inherit;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    gap: 5px;
    padding-left: 16px;
    align-items: center;
    height: 100%;
    flex: 1;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    border: 1px solid ${(props) => (props.focused ? "#1c62b9" : "#c6c6c6")};
    margin-left: ${(props) => (props.focused ? "-25px" : "0")};
`;

const CustomInput = styled(Input)`
    border: 0 !important;
    box-shadow: none !important;
`;

const SearchButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 64px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border: 1px solid #c6c6c6;
    outline: none !important;
    background-color: #f8f8f8;
    cursor: pointer;
    border-left: none !important;
    &:hover {
        background-color: #f0f0f0;
        border: 1px solid #c6c6c6;
    }
`;

const Content = styled(Popover)`
    display: flex;
    flex-direction: column;
    padding-block: 12px;
`;

const SearchItem = styled.div`
    height: 32px;
    display: flex;
    align-items: center;
    padding-inline: 20px;
    cursor: hand;
    gap: 10px;
    &:hover {
        background-color: #f8f8f8;
    }
`;

const Remove = styled.span`
    color: #36c;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
