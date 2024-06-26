export type TRecentEvent = {
    _id: string;
    name: string;
    img: string;
};

export type TEvent = {
    _id: string;
    name: string;
    imageUrl: string;
};

export type TService = {
    _id: string;
    serviceName: string;
    imageUrl: string;
    features: string[];
};