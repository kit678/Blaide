import { createBoard } from '@wixc3/react-board';
import { Organisations } from '../../../components/organisations/organisations';

export default createBoard({
    name: 'Organisations',
    Board: () => <Organisations />,
    isSnippet: true,
});