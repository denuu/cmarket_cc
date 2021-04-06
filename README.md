# Take-home Assignment: Seller signup form.

To start:
- `npm i` and `composer install` to install all dependencies.
- Start Sail by running `./vendor/bin/sail up -d` in `cmarket-cc`, this will provide our database.
- Run `npm run dev` to compile style and script assets.
- In a new terminal instance, run `PHP artisan serve` to run the Laravel application.
- In yet another terminal instance, run `./vendor/bin/sail artisan migrate` to run migrations and create the table necessary for this app.
- Project should be visible at `http://127.0.0.1:8000/`.

## Known issues:

- Submission does not work. It fails due to a MySQL issue I haven't yet been able to resolve:
    - If `DB_HOST` in `.env` set to `mysql`, `./vendor/bin/sail artisan migrate` will work - but upon running INSERT query MySQL will return error `SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo failed: nodename nor servname provided, or not known`.
    - If `DB_HOST` in `.env` set to `127.0.0.1` then `./vendor/bin/sail artisan migrate` will result in refused connection, while `php artisan migrate` will result in `The server requested authentication method unknown to the client`.
    - If `DB_HOST` in `.env` set to `localhost` then `./vendor/bin/sail artisan migrate` and `php artisan migrate` will _both_ result in `No such file or directory`.

- Design assumptions made, could be misconstrued as errors:
    - Background sticks to bottom of the viewport, this was not defined in the project rundown.
    - "Card" form container is a fixed distance from the top of the screen, as it is in the design.
    - App header with logo is relative, rather than fixed.
    - Assumed max-width of `1600px` after which gutters are present, due to not being defined and background asset not scaling too well beyond that.

## Ways I'd improve the project:

- Investigate configurations via `php.ini` to resolve the MySQL issue.
- Ensure all values enter MySQL sanitised.
- Determine exact background and component positioning with creatives, should the card remain the same distance from the top? Should it be centred regardless? Should the background be placed at the bottom of the viewport regardless of the height, or positioned relative to the bottom of the card? ...And so forth.
- Create a notification for duplicate submission attempts.
- Form/field validation.
- Prevent access to submit step via address bar.
- Lazy/chunk load styles and scripts via a more fun and involved webpack config.
- Cache busting on assets with `.version`.
- Create `inputField` component that takes a `name`, `field type`, `width`, associated `vue model`.
- Create `inputButton` comonent that takes optional `colour` parameter but defaults to green-text-on-white, button `title`, `target`, and `url/action`.
- Create custom styled OS element replacements for Select options.
- Learn how Vue loads image (and all other) assets correctly.

## References:

- [Design found here](https://www.figma.com/file/POQB1y6wcHPZCmA5SfJi6a/Code-Challenge%3A-Seller-Application?node-id=0%3A1).
- [Project description document found here](https://docs.google.com/document/d/19NjVIuaHSmCCrOBplqxkJLQx4aKUYw_JPbZ3hDlCgTc/edit).