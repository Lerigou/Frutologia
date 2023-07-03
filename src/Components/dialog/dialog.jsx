import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import "./dialog.scss";
import cancel from '../../Assets/cancel.svg';

export default function DialogFruit({ fruitData, open, onClose }) {
    if (fruitData === null) {
        return null; 
      }

    const { name, family, order, genus, nutritions } = fruitData;

    const handleClose = () => {
      window.location.reload();
      onClose();
    };  
    
    return (
      <Dialog open={open} onClose={onClose} className="dialog">
        <DialogTitle className="dialog-title">
            {fruitData.name}
            <button className="close-dialog" onClick={handleClose}> <img src={cancel} alt="" /> </button>
          
          </DialogTitle>
        <DialogContent className="dialog-body">
          <TableContainer component={Paper} className="container-table">

            <Table className="table">
              <TableHead className="table-head">
                <p>Informações Gerais</p>
              </TableHead>

              <TableBody>
                <TableRow className="table-row">
                  <TableCell className="table-cell">Nome</TableCell>
                  <TableCell className="table-cell">{name}</TableCell>
                </TableRow>

                <TableRow className="table-row">
                  <TableCell className="table-cell">Família</TableCell>
                  <TableCell className="table-cell">{family}</TableCell>
                </TableRow>

                <TableRow className="table-row">
                  <TableCell className="table-cell">Ordem</TableCell>
                  <TableCell className="table-cell">{order}</TableCell>
                </TableRow>

                <TableRow className="table-row">
                  <TableCell className="table-cell">Gênero</TableCell>
                  <TableCell className="table-cell">{genus}</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Table className="table">
            <TableHead className="table-head">
                <p>Informações Nutricionais</p>
              </TableHead>

              <TableBody>
                <TableRow className="table-row">
                  <TableCell className="table-cell">Calorias</TableCell>
                  <TableCell className="table-cell">{nutritions.calories}</TableCell>
                </TableRow>

                <TableRow className="table-row">
                  <TableCell className="table-cell">Gordura</TableCell>
                  <TableCell className="table-cell">{nutritions.fat}</TableCell>
                </TableRow>

                <TableRow className="table-row">
                  <TableCell className="table-cell">Açúcar</TableCell>
                  <TableCell className="table-cell">{nutritions.sugar}</TableCell>
                </TableRow>

                <TableRow className="table-row">
                  <TableCell className="table-cell">Carboidratos</TableCell>
                  <TableCell className="table-cell">{nutritions.carbohydrates}</TableCell>
                </TableRow>

                <TableRow className="table-row">
                  <TableCell className="table-cell">Proteína</TableCell>
                  <TableCell className="table-cell">{nutritions.protein}</TableCell>
                </TableRow>

              </TableBody>

            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    );
  }
  
