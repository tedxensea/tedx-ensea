
import prisma from '../../prisma'

export default async function assetHandler(req, res) {
    const {method} = req

    switch (method) {
        case 'GET':
            try {
                const attendees = await prisma.attendee.findMany();
                res.status(200).json(attendees);
            } catch (e) {
                console.error('Request error', e);
                res.status(500).json({ error: 'Error fetching attendees' });
            }
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}