class PagesController < ApplicationController
  def home
  end

  def search
  countries = find_country(params[:country])

  unless countries
    flash[:alert] = 'Country not found'
    return render action: :index
  end
  
  private

  def request_api(url)
    response = Excon.get(url)

    return nil if response.status != 200

    JSON.parse(response.body)
  end

  def find_country(name)
    request_api(
      'https://api.covid19api.com/summary'
    )
  end
end
