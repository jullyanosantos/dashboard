import { LazyLoadEvent } from 'primeng/api';
import { Paginator } from 'primeng/paginator/paginator';
import { Table } from 'primeng/table/table';

export class DataTableHelper {
    predefinedRecordsCountPerPage: number[] = [5, 10, 25];

    defaultRecordsCountPerPage: number = 5;

    isResponsive = true;

    resizableColumns!: false;

    totalRecordsCount: number = 0;

    records!: any[];

    isLoading = false;

    showLoadingIndicator(): void {
        setTimeout(() => {
            this.isLoading = true;
        }, 0);
    }

    hideLoadingIndicator(): void {
        setTimeout(() => {
            this.isLoading = false;
        }, 0);
    }

    getSorting(table: Table): string | undefined {
        let sorting;
        if (table != undefined && table.sortField != null) {
            sorting = table.sortField;
            if (table.sortOrder === 1) {
                // sorting += ' ASC';
            } else if (table.sortOrder === -1) {
                sorting += ' DESC';
            }
        }

        return sorting;
    }

    getMaxResultCount(paginator: Paginator, event: LazyLoadEvent): number | undefined {
        if (paginator.rows) {
            return paginator.rows;
        }

        if (!event) {
            return this.defaultRecordsCountPerPage;
        }

        return event.rows;
    }

    getSkipCount(paginator: Paginator, event: LazyLoadEvent): number | undefined {

        if (paginator != undefined) {

            if (paginator.first != undefined) {

                if (paginator.first == 0)
                    paginator.first = 1;

                return paginator.first;
            }
        }

        if (!event) {
            return 1;
        }

        return event.first == 0 ? 1 : event.first;
    }

    shouldResetPaging(event: LazyLoadEvent): boolean {
        if (!event /*|| event.sortField*/) { // if you want to reset after sorting, comment out parameter
            return true;
        }

        return false;
    }
}