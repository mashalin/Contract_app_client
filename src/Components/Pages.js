import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Pagination } from "react-bootstrap";
import { useContext } from "react";

const Pages = observer( () => {
    const {course} = useContext(Context);
    const pageCount = Math.ceil(course.totalCount / course.limit);
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    return(
        <Pagination className='mt-5'>
            {
                pages.map(page =>
                  <Pagination.Item onClick={() => course.setPage(page)} key={page} active={course.page === page} className='pagin'>{page}</Pagination.Item>
                    )
            }
        </Pagination>
    );
})

export default Pages;