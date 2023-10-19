import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selectedproduct',
  templateUrl: './selectedproduct.component.html',
  styleUrls: ['./selectedproduct.component.css']
})
export class SelectedproductComponent {
  public idProduct!: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.idProduct = this.activatedRoute.snapshot.params['identif'];
  }

  onGoBackToProduits() {
    this.router.navigate(['/produits']);
  }
}
