import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export const formatDateToNow = (date) => formatDistanceToNow(
    new Date(date),
    {addSuffix: true}
);

