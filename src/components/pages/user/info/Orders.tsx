import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { Box } from "@material-ui/core";

const rows: any[] = [];

const showRows = () => {
	if (rows.length) {
		return (
			<TableBody>
				{rows.map((row) => (
					<TableRow key={row.id}>
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.source}</TableCell>
						<TableCell>{row.shipTo}</TableCell>
						<TableCell>{row.paymentMethod}</TableCell>
						<TableCell align="right">{row.amount}</TableCell>
					</TableRow>
				))}
			</TableBody>
		);
	} else {
		return (
			<Box margin={4}>
				<Title> تا حالا توری نرفتید:((</Title>
			</Box>
		);
	}
};

export const Orders = () => {
	return (
		<React.Fragment>
			<Title>تور های اخیر </Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell align="center">نام</TableCell>
						<TableCell align="center">روز</TableCell>
						<TableCell align="center">مبدا</TableCell>
						<TableCell align="center">مقصد</TableCell>
					</TableRow>
				</TableHead>
				{showRows()}
			</Table>
		</React.Fragment>
	);
};
