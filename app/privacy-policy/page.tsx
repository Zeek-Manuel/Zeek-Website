/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useEffect, useState } from "react";
import useDetectDevice from "../Utilities/UseDetectDevice";


type Props<S extends string, AO = object[]> = {
    caption: S;
    detailsCaption: {
        header: string;
        subHeader: string;
    };
    details: AO;
    tableContent: AO;
};

export default function page(): JSX.Element {

    const { isDesktop } = useDetectDevice();
    const [openContentLinks, setOpenContentLinks] = useState<boolean>(false);

    function HandleLinksMenu(): void {
        setOpenContentLinks(!openContentLinks ? true : false);
    }


    const [currentPageID, setCurrentPageID] = useState<string | null>(null);

    const [data] = useState<Props<string>>({
        caption: "Privacy Policy",
        detailsCaption: {
            header: "This Privacy Policy outlines the types of information we collect, how we use and protect it, and the choices individuals have regarding their personal data",
            subHeader: ""
        },
        details: [
            {
                parentText: "Introduction",
                childText: ["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
            {
                parentText: "How We Use Your Information",
                childText: ["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
            {   parentText: "Information Sharing and Disclosure",
                childText: ["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
            {   parentText: "Your Rights and Choices",
                childText: ["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
            {   parentText: "Deliveries and Purchases",
                childText: ["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
            {   parentText: "Support and Assistance",
                childText: ["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
            {   parentText: "Barring and Disclosure",
                childText: ["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
        ],

        tableContent: [
            {
                parentLink: "Introduction",
            },
            {
                parentLink: "How We Use Your Information",
            },
            {
                parentLink: "Information Sharing and Disclosure",
            },
            {
                parentLink: "Your Rights and Choices",
            },
            {
                parentLink: "Deliveries and Purchases",
            },
            {
                parentLink: "Support and Assistance",
            },
            {
                parentLink: "Barring and Disclosure",
            }
        ]
    });
    return (
        <><div className="container flex flex-col mx-auto h-full p-12">
            <div
                className=" justify-center text-4xl text-cyan-500 pb-4 "
            >
                {"Table of contents"}
            </div>
            {data.tableContent.map((link: object, index: number) => {
                return (
                    <a
                        key={index}
                        href={`#${Object(link).parentLink}`}
                        className={"flex flex-col gap-10 pb-4"}
                    >
                        <p className="content-links text-base text-dark">
                            {`${index + 1}.`}
                            {Object(link).parentLink}
                        </p>
                    </a>
                );
            })
            }

        </div><div className=" container mx-auto p-4 flex flex-col gap-2">
                <div className="flex flex-col gap-2 ">
                    <h4 className="details-caption text-base text-dark">
                        {data.detailsCaption.header}
                    </h4>
                </div>
                <div className="flex flex-col text-dark gap-4 w-100">
                    {data.details.map((newData: object, key: number) => (
                        <div
                            key={key}
                            className={`text-content ${currentPageID === Object(newData).parentText ? 'highlight' : ''}`}
                            id={Object(newData).parentText}
                        >
                            <p className="flex flex-col gap-4 text-base font-medium">
                                {Object(newData).parentText}
                            </p>
                            <p className="lex flex-col gap-4 text-base">
                                {Object(newData).childText}
                            </p>
                        </div>
                    ))}
                </div>
            </div></>
    )
}