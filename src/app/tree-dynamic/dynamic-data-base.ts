import { Injectable, OnInit } from '@angular/core';
import { PermissionService } from '../permission.service';
import { DynamicFlatNode } from './dynamic-flat-node';

@Injectable({ providedIn: 'root' })
export class DynamicDatabase implements OnInit {
  ngOnInit(): void {}

  constructor(private permissionService: PermissionService) {}
  // dataMap = new Map<string, string[]>([
  //   ['Tribe', ['a', 'b', 'c']],
  //   ['Mesila', ['e', 'f', 'g']],
  //   ['Rest', ['h', 'i']],
  //   ['Web Client', ['j', 'k', 'l']]
  // ]);

  //  { name: 'Tribe', id: 'A' },
  // { name: 'Mesila', id: 'B' },
  // { name: 'Rest', id: 'C' },
  // { name: 'Web Client', id: 'D' },
  // { name: 'Main Frame', id: 'E' },
  // { name: 'WSO2', id: 'E' },
  // { name: 'Splunk', id: 'E' }

  dataMap = new Map<string, { name: string; status: string; isDuplicate }[]>([
    [
      'Tribe',
      [
        { name: 'a', status: 'success', isDuplicate: false },
        { name: 'b', status: 'success', isDuplicate: false },
        { name: 'c', status: 'success', isDuplicate: false }
      ]
    ],
    [
      'Mesila',
      [
        { name: 'd', status: 'success', isDuplicate: false },
        { name: 'a', status: 'success', isDuplicate: false },
        { name: 'f', status: 'success', isDuplicate: false }
      ]
    ],
    [
      'Rest',
      [
        { name: 'd', status: 'success', isDuplicate: false },
        { name: 'a', status: 'success', isDuplicate: false },
        { name: 'f', status: 'success', isDuplicate: false }
      ]
    ],
    [
      'Web Client',
      [
        { name: 'd', status: 'success', isDuplicate: false },
        { name: 'a', status: 'success', isDuplicate: false },
        { name: 'f', status: 'success', isDuplicate: false }
      ]
    ],
    [
      'Main Frame',
      [
        { name: 'd', status: 'success', isDuplicate: false },
        { name: 'a', status: 'success', isDuplicate: false },
        { name: 'f', status: 'success', isDuplicate: false }
      ]
    ],
    [
      'WSO2',
      [
        { name: 'd', status: 'success', isDuplicate: false },
        { name: 'a', status: 'success', isDuplicate: false },
        { name: 'f', status: 'success', isDuplicate: false }
      ]
    ],
    [
      'Splunk',
      [
        { name: 'd', status: 'success', isDuplicate: false },
        { name: 'a', status: 'success', isDuplicate: false },
        { name: 'f', status: 'success', isDuplicate: false }
      ]
    ]
  ]);

  //rootLevelNodes: string[] = ['Tribe', 'Mesila', 'Rest'];
  rootLevelNodes: string[] = [];

  // childArray = ['Tribe', 'Mesila'];

  /** Initial data from database */
  initialData(permissionData): DynamicFlatNode[] {
    this.rootLevelNodes = permissionData;
    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

  getChildren(parent: string) {
    return this.dataMap.get(parent);
  }

  // addNode(newNode) {
  //   // console.log(x);
  //   this.rootLevelNodes.push(newNode.name);
  //   //  console.log(this.rootLevelNodes);
  // }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}
