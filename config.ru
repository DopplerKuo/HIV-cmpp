use Rack::Static,
  :urls => ["/assets"],
  :root => "public"

map '/game_start.html' do
    run lambda { |env|
      [
        200,
        {
          'Content-Type'  => 'text/html',
          'Cache-Control' => 'public, max-age=0'
        },
        File.open('public/game_start.html', File::RDONLY)
      ]
    }
end

map '/information.html' do
    run lambda { |env|
      [
        200,
        {
          'Content-Type'  => 'text/html',
          'Cache-Control' => 'public, max-age=0'
        },
        File.open('public/information.html', File::RDONLY)
      ]
    }
end

map '/about.html' do
    run lambda { |env|
      [
        200,
        {
          'Content-Type'  => 'text/html',
          'Cache-Control' => 'public, max-age=0'
        },
        File.open('public/about.html', File::RDONLY)
      ]
    }
end

map '/contact.html' do
    run lambda { |env|
      [
        200,
        {
          'Content-Type'  => 'text/html',
          'Cache-Control' => 'public, max-age=0'
        },
        File.open('public/contact.html', File::RDONLY)
      ]
    }
end

map '/' do
    run lambda { |env|
      [
        200,
        {
          'Content-Type'  => 'text/html',
          'Cache-Control' => 'public, max-age=0'
        },
        File.open('public/index.html', File::RDONLY)
      ]
    }
end
