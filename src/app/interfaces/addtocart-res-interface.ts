export interface IAddtoCartResponse
{
    addedCourseId: string;
    removedCourseId: string;
    newlyAdded: boolean;
    alreadyAdded: boolean;
    isdoneAdded: boolean;
    isdoneRemoved: boolean;
    itemCounter: number;
    message: string;
}

export interface ICartResponse
{
    addedCourseId: string;
    removedCourseId: string;
    newlyAdded: boolean;
    alreadyAdded: boolean;
    isdoneAdded: boolean;
    isdoneRemoved: boolean;
    itemCounter: number;
    message: string;
}