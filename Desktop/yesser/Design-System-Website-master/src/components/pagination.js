import React from 'react';
import { withNamespaces } from 'react-i18next';


function Pagination ({ t }) {
    return (
        <div className="row px-md-3 px-1">
            <nav aria-label="navigation">
                <ul class="pagination govsa-pagination p-0">
                    <li class="page-item"><a class="page-link Pagination-icon" href="#">
                            <i class="govsa--icon govsa--arrowleft"></i></a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active-page"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link Pagination-icon" href="#">
                            <i class="govsa--icon govsa--arrowright"></i></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default withNamespaces()(Pagination);