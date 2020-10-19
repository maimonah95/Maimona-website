import React from 'react';
import ReactPaginate from 'react-paginate';

interface IPaginationProps {
    totalResult:number;
    resultPerPage: number;
    onPageChange: any;
    currentPage:number;
}

interface IPaginationState {
    currentPage: number;
}

export default class Pagination extends React.Component<IPaginationProps,IPaginationState> {

    calculatePageCount = () => {
        return (this.props.resultPerPage > 0)? Math.ceil(this.props.totalResult / this.props.resultPerPage) : 0;
    }
    
    componentDidUpdate(){
        window.scrollTo(0,0)
    }

    render() {
        const previousLabel = (
                <div aria-label="Previous">
                        <span className="arrow-white arrow-gray4 perv"
                            aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                        </div>
        );
   
        const nextLabel = (
                <div aria-label="Next">
                    <span className="arrow-white arrow-gray4" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </div>
        );
            console.log(" pagination this.props.currentPage",this.props.currentPage)
        return (
            <div id="pagination">
                <nav aria-label="pagination example">
                
                <ReactPaginate 
                        pageCount={this.calculatePageCount()}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        previousLabel = {previousLabel}
                        nextLabel = {nextLabel}
                        //breakLabel = {null}
                        //breakClassName = ''
                        onPageChange = {(args) => {
                            this.props.onPageChange(args.selected,args.selected * this.props.resultPerPage, this.props.resultPerPage);
                        }}
                        initialPage = {this.props.currentPage}
                        forcePage = {this.props.currentPage}
                        //disableInitialCallback = {}
                        containerClassName = "pagination justify-content-center pagination-circle pg-yellow3 mb-0"
                        pageClassName = "page-item"
                        pageLinkClassName = "page-link"
                        activeClassName = "active"
                        activeLinkClassName = "page-link"
                        previousClassName = "page-item"
                        nextClassName = "page-item"
                        previousLinkClassName = "page-link page-link-arrow"
                        nextLinkClassName = "page-link page-link-arrow"
                        disabledClassName = "disabled"
                        // hrefBuilder = {}
                        // extraAriaContext = {}
                    />
                </nav>
            </div>
        );
    }
    

}