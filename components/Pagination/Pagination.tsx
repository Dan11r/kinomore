import {memo, useEffect} from 'react'
import {FiChevronsLeft, FiChevronLeft, FiChevronsRight, FiChevronRight} from 'react-icons/fi';
import {ButtonBase} from '../ButtonBase/ButtonBase';
import styles from './Pagination.module.scss';
import classNames from 'classnames';

interface PaginationProps {
	setPage: (page: number | undefined) => void;
  	pages: number | undefined;
  	page: number;
  	className?: string;
}

export const Pagination = memo<PaginationProps>(({page, setPage, pages, className}) => {

	const isFirstPage = page === 1;
	const isLastPage = page === pages;

	useEffect(() => {
		scrollTo(0, 0)
	}, [page])

	return (
		<div className={classNames(styles.pagination, className)}>
			<ButtonBase
				onClick={() => setPage(1)}
				className={classNames(styles.btn, styles.left)}
				disabled={isFirstPage}
			>
				<FiChevronsLeft />
			</ButtonBase>
			<ButtonBase
				onClick={() => setPage(page - 1)}
				className={styles.btn}
				disabled={isFirstPage}
			>
				<FiChevronLeft />
			</ButtonBase>
			<span className={styles.value}>
				{page} / {pages}
			</span>
			<ButtonBase
				disabled={isLastPage}
				onClick={() => setPage(page + 1)}
				className={styles.btn}
			>
				<FiChevronRight />
			</ButtonBase>
			<ButtonBase
				disabled={isLastPage}
				onClick={() => setPage(pages)}
				className={classNames(styles.btn, styles.right)}
			>
				<FiChevronsRight />
			</ButtonBase>
		</div>
	);
})

Pagination.displayName = 'Pagination'