select *
from country
where
    country in (
        'India',
        'Bangladesh',
        'China'
    );

select *
from actor
where
    last_name like '%od%'
order by last_name, first_name;

alter table actor add middle_name varchar(255);

alter table actor modify middle_name after first_name;

select count(first_name) as actor_count, last_name
from actor
group by
    last_name
having
    count(first_name) > 1;

select staff.first_name, staff.last_name, address
from staff
    join address on staff.address_id = address.address_id;

select film.title, count(inventory.inventory_id) as inventory_count
from film
    join inventory on film.film_id = inventory.film_id
group by
    film.title;

select film.title, count(rental.rental_id) as total_rental
from film
    join inventory on inventory.film_id = film.film_id
    join rental on inventory.inventory_id = rental.inventory_id
group by
    film.title
order by total_rental desc;

select store.store_id, city.city, country.country
from
    store
    join address on store.address_id = address.address_id
    join city on address.city_id = city.city_id
    join country on city.country_id = country.country_id

select actor.first_name, actor.last_name
from actor
where
    actor.actor_id in (
        select film_actor.actor_id
        from film_actor
            join film on film.film_id = film_actor.film_id
        where
            film.title = 'Alone Trip'
    );

-- 3,12,13,82,100,160,167,187

alter table actor drop column middle_name;