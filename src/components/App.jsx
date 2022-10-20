import { PageTitle } from 'components/PageTitle/PageTitle'
import { EventBoard } from 'components/EventBoard/EventBoard'
// import s from 'components/EventBoard/EventBoard.module.css'
export const App = () => {
    return (
         <div>
            <PageTitle text="24th Core Worlds Coalition Conference" />
            <EventBoard />
        </div>
    );
};

                             