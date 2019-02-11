class Api::V1::StudentsController < ApplicationController

  def index
    data = [
      ['Cohort Number', 'Awesomeness', 'Stress Levels'],
      ['53',  1000,      400],
      ['54',  1170,      460],
      ['55',  660,       1120],
      ['56',  1201,      602],
      ['57',  1250,      650],
      ['58',  1500,      630],
      ['59',  1030,      800]
    ]
    render json: {data: data}
  end
end
