import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceService, IUser } from '../../services/user-service.service';
import { Observable } from 'rxjs';
import { FlexGrid, Column } from 'wijmo/wijmo.grid';
import { wjcGrid, getColumnBindingIndex } from 'src/app/shared/wijmo/wijmo.module';

// tslint:disable-next-line:one-variable-per-declaration
export type IColumnTypes = keyof IUser

const filterFn = (showActive) => (user: IUser) => user.active || showActive

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserServiceService) { }
  @ViewChild('flex')
  flex: FlexGrid

  users$: Observable<ReadonlyArray<IUser>>

  showActive = false
  isInitialized = false

  ngOnInit() {
    this.users$ = this.userService.getData()
  }

  flexInitialized(grid: FlexGrid) {
    // grid.loadingRows.addHandler(this.flexLoadedRows.bind(this))
    grid.formatItem.addHandler(this.updateFormats)

    const intervalId = setInterval(() => {
      if (!grid.collectionView) { return }
      grid.collectionView.filter = filterFn(this.showActive)
      this.addFinalColumn(grid)
      this.updateColumnWidths(grid)
      this.updateHeaders(grid)
      this.isInitialized = true
      console.log('initialized')
      clearInterval(intervalId)
    })
  }

  flexLoadedRows(grid: FlexGrid) {
    console.log('loadedRows')
  }

  updateFormats(grid: FlexGrid, args: wjcGrid.FormatItemEventArgs): void {
    const getColumn = grid.getColumn.bind(grid)
    const getColumnIndex = getColumnBindingIndex.bind(undefined, grid)

    switch (args.col) {
      case getColumnIndex('percent'): getColumn('percent').format = 'p2'; break
      case getColumnIndex('dateJoined'): getColumn('dateJoined').format = 'MM/dd/yyyy'; break
      case getColumnIndex('cashOnHand'): getColumn('cashOnHand').format = 'c0'; break
    }
  }

  addFinalColumn(grid: FlexGrid): void {
    grid.columns.insert(grid.columns.length, new Column({
      width: '*'
    }))
  }

  updateHeaders(grid: FlexGrid): void {
    const nameBinding: IColumnTypes = 'name'
    grid.getColumn(nameBinding).header = 'Full Name'
  }

  updateColumnWidths(grid: FlexGrid): void {
    grid.autoSizeColumns()
    grid.columns[grid.columns.length - 1].width = '*'
  }

  setUserActiveStatus(grid: FlexGrid, active = false): void {
    grid.selectedRows.forEach(({dataItem}) => (dataItem as IUser).active = active)
    grid.collectionView.refresh()
  }

  toggleShowActive(): void {
    this.flex.collectionView.filter = filterFn(this.showActive)
  }
}

