import { format, subDays } from 'date-fns';

export const formattedDate = (date = new Date()) => format(date, 'd MMMM yyyy');


export const oneDayLessToCurrentDate = (date = new Date()) => {
    const currentDate = date;
    const previousDate = subDays(currentDate, 1);
    const formattedPreviousDate = format(previousDate, 'd MMMM yyyy');
    return formattedPreviousDate;

};

