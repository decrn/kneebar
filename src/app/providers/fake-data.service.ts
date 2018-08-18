import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { DataService } from './data.service';
import { Position } from '../models/position';
import { Submission } from '../models/submission';
import { Category } from '../models/category';
import { Item } from '../models/item';
@Injectable({
    providedIn: 'root',
})

export class FakeDataService implements DataService {

    private submissions: Submission[] = [
        new Submission('ezekiel-choke', 'Ezekiel Choke', 'armbar.jpg'),
        new Submission('armbar', 'Armbar', 'armbar.jpg'),
        new Submission('darce-choke', 'D\'arce Choke', 'armbar.jpg'),
        new Submission('rear-naked-choke', 'Rear Naked Choke', 'armbar.jpg'),
    ];

    private positions: Position[] = [
        new Position('butterfly-guard', 'Butterfly Guard', 'butterfly-guard.jpg', [this.submissions[1]]),
        new Position('spider-guard', 'Spider Guard', 'spider-guard.jpg', [this.submissions[1], this.submissions[2]]),
        new Position('de-la-riva-guard', 'De La Riva Guard', 'dlr-guard.jpg', []),
        new Position('back-mount', 'Back Mount', 'back-mount.jpg', [this.submissions[3]]),
    ];

    private subcategories: Category[] = [
        new Category('closed-guard', 'Closed Guard', 'closed-guard.jpg', [this.positions[1], this.positions[2]]),
        new Category('open-guard', 'Open Guard', 'open-guard.jpg', [this.positions[0]]),
    ];

    private categories: Category[] = [
        new Category('guard', 'Guard', 'guard.jpg', [], [this.subcategories[0], this.subcategories[1]]),
        new Category('mount', 'Mount', 'mount.jpg', [this.positions[3]], []),
        new Category('standing', 'Standing', 'standing.jpg', [this.positions[2]], [this.subcategories[1]]),
    ];


    private rootCategory: Category = new Category('', 'Positions overview', '', [], this.categories);

    private allCategories = this.categories.concat(this.subcategories);

    constructor() {
        const armbar = "The jūji-gatame (十字固め, rendered as \"Ude-Hishigi-Juji-Gatame\"), also sometimes used interchangeably with the terms armbar, cross armbar or straight armbar, is an official Kodokan Judo technique. The English word \"bar\" is used here to signify the opponent's extended arm, while the Japanese word \"jūji\" (十字) refers to the armbar's visual resemblance to the number 10 as written in kanji, 十. The word jūji is also found in \"jūjika\" (十字架), meaning a cross. In general, the practitioner secures an arm at the wrist of the opponent, trapping it by squeezing the knees together. To initiate the submission one of the legs will be across the chest of the opponent, the second leg's calf will cross face the opponent, with the hips tight into the armpit, with the arm held between the thighs, with the elbow pointing against the thigh or hips. By holding the opponent's wrist to the attacker's chest with the pinky finger on the sternum and the thumb facing up (arm semi-supinated or semi-pronated), the practitioner can easily extend the opponent's arm and hyperextend the opponent's elbow. The attacker can further increase the pressure on the elbow joint by arching his hips against the elbow. This technique is used in various grappling martial arts, including but not limited to Brazilian jiu-jitsu, catch wrestling, judo, jujutsu, Sambo, and shoot wrestling, and is one of the most common ways to win a match in mixed martial arts competition.";
        const guard = "The guard is a ground grappling position in which one combatant has their back to the ground while attempting to control the other combatant using their legs. In pure grappling combat sports, the guard is considered an advantageous position, because the bottom combatant can attack with various joint locks and chokeholds, while the top combatant's priority is the transition into a more dominant position, a process known as passing the guard. In mixed martial arts competition or hand-to-hand combat in general, it is possible to effectively strike from the top in the guard, even though the bottom combatant exerts some control. There are various types of guard, with their own advantages and disadvantages.";
        this.submissions.forEach(s => s.description = armbar);
        this.submissions.forEach(s => s.rating = 15);
        this.positions.forEach(p => p.description = guard);
        const tags = ['judo', 'sambo', '10th-planet', 'brazil', 'mma'];
        this.submissions.forEach(s => s.tags = tags);
        this.submissions.forEach(s => s.image = 'armbar.jpg');
        this.positions.forEach(p => p.image = 'backmount.jpg');
    }



    getPositions(): Observable<Position[]> {
        return of(this.positions);
    }
    getCategory(name?: string): Observable<Category> {
        return of(!name ? this.rootCategory : this.allCategories.find(c => c.name === name));
    }
    getSubmissions(): Observable<Submission[]> {
        return of(this.submissions);
    }

    getItem(name: string): Observable<Item> {
        const items = [];
        this.positions.forEach(p => items.push(p));
        this.submissions.forEach(s => items.push(s));
        return of(
            items.find(p => p.name.indexOf(name) > -1)
        );
    }


}
